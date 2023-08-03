'use client'
import classNames from 'classnames/bind';
import styles from '../../../order-online/orderonline.module.css';

const cx = classNames.bind(styles);

export default function Validator(formSelector) {
    function getParent(element, parentSelector) {
        while (element.parentElement){
            if (element.parentElement.classList.contains(parentSelector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    let formRules = {};
    
    // Quy uoc: co loi => err msg
    //          ko loi => undefined
    let validatorRules = {
        required: function (value) {
            return value ? undefined : "Vui long nhap truong nay";
        },

        email: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Vui long nhap email";    
        },

        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui long nhap mat khau toi thieu ${min} ki tu`;
            }
        },

        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui long nhap mat khau toi da ${max} ki tu`;
            }
        },

        confirm: function (value) {
            let passwordValue = formElement.querySelector('[name="password"]').value;
            return value === passwordValue ? undefined : `Vui long nhap lai mat khau`;
        }
    }

    let formElement = document.querySelector(formSelector)
    if (formElement) {
        // lay ra inputs ' => lay rules attribute cua input ' => lap qua tung rule ' => tao rule func ' =>
        // append vao formRules {}'
        let inputs = document.querySelectorAll("[name][rules]");
        for (let input of inputs) {
            let rules = input.getAttribute('rules').split('|');
            for (let rule of rules) {
                let ruleInfo;
                let isRuleHasValue =  rule.includes(":");
                if (isRuleHasValue) {
                    ruleInfo = rule.split(":");
                    rule = ruleInfo[0];
                }

                let ruleFunc = validatorRules[rule];

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            input.onblur = onValidateHandler;
            input.oninput = onInputHandler;
        }

        // tim rules tu thang formRules ' => error Message + error State ' => 
        // neu co error message => them invalid vao form-group + them innerHTML vao form-message 

        function onValidateHandler(event) {
            let rules = formRules[event.target.name];

            let errorMessage;
            let errorState = rules.some((rule) => {
                errorMessage = rule(event.target.value);
                return rule(event.target.value)
            })
            console.log(errorState)
            if (errorState) {
                let formGroupElement = getParent(event.target, cx('form-group'));
                if (formGroupElement) {
                    formGroupElement.classList.add(cx('invalid'));
                    let formMessageElement = formGroupElement.querySelector(cx('.form-message'));
                    console.log(formMessageElement);
                    if (formMessageElement) {
                        formMessageElement.innerText = errorMessage;
                    }
                }
            }
            return errorState;
        }

        function onInputHandler (event) {
            let formGroupElement = getParent(event.target, cx('form-group'));
            let formMessageElement = formGroupElement.querySelector(cx('.form-message'));
            if (formGroupElement.classList.contains(cx('invalid'))) {
                formGroupElement.classList.remove(cx('invalid'));
                formMessageElement.innerText = '';
            }
        }

        formElement.onsubmit = (event) => {
            event.preventDefault();
            let inputs = document.querySelectorAll("[name][rules]");
            let isValid = true;
            for (let input of inputs) {
                if (onValidateHandler({target : input})) {
                    isValid = false;
                }
            }
            
            if (isValid) {
                if (typeof this.onSubmit === 'function') {
                    let enableInputs = formElement.querySelectorAll('[name]');
                    let formData = Array.from(enableInputs).reduce((values, input) => {
                        return (values[input.name] = input.value) && values
                    }, {})
                    this.onSubmit(formData);
                } 
                else {
                    console.log('default submitting...');
                }
            }

        }

    }
}


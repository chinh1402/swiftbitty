const contentData = [
    {
        firstLine: 'This course is available for lunch, dinner',
        comboName: 'Quick bite',
        comboDescription: 'Experience the Quick Bites combo - a main dish, Loaded Fries, and a drink, crafted to satisfy your cravings with every delicious bite.',
        comboImageUrl: '../images/order.png',
        comboDetailsItems: [
            {
                name: 'Classic Cheeseburger',
                description: 'Our juicy beef patty topped with melted cheese, lettuce, tomato, and\
                 special sauce on a soft bun.',
                price: 7,
            },
            {
                name: 'Crispy Chicken Sandwich',
                description: 'A crispy breaded chicken breast topped with lettuce, tomato, and mayo\
                 on a toasted bun.',
                price: 6,
            },
            {
                name: 'Loaded fries',
                description: 'Crispy golden fries topped with melted cheese, bacon bits, and\
                green onions.',
                price: 5,
            },
            
        ],
        totalPrice: function() {
            return this.comboDetailsItems.reduce((acc, curr) => acc + curr.price, 0)
        },
    },

    {
        firstLine: 'THIS COURSE IS AVAILABLE FOR BREAKFAST, LUNCH, DINNER',
        comboName: 'Fresh & flavorful',
        comboDescription: 'Savor freshness and flavor in every bite with our mouth-watering Fresh & Flavorful combo - a main, side salad, and drink crafted from locally-sourced ingredients.',
        comboImageUrl: '../images/order2.png',
        comboDetailsItems: [
            {
                name: 'Grilled Chicken Salad',
                description: 'Grilled chicken breast served on a bed of mixed\
                greens, cherry tomatoes, cucumbers, and sliced avocado, drizzled\
                with a tangy vinaigrette dressing.',
                price: 9,
            },
            {
                name: 'Veggie Wrap',
                description: 'A delightful wrap filled with fresh vegetables such as\
                lettuce, bell peppers, carrots, and cucumbers, complemented by a zesty dressing.',
                price: 5,
            },
            {
                name: 'Fruit Cup',
                description: 'A refreshing medley of seasonal fruits, including juicy watermelon, succulent\
                pineapple, sweet strawberries, and tangy grapes.',
                price: 1,
            },
        ],
        totalPrice: function() {
            return this.comboDetailsItems.reduce((acc, curr) => acc + curr.price, 0)
        },
    },

    {
        firstLine: 'THIS COURSE IS AVAILABLE FOR LUNCH, DINNER',
        comboName: 'Value Meals',
        comboDescription: 'Get unbeatable value and taste with our Value Meals combo - featuring our most popular mains, paired with a side and drink, all at an affordable price.',
        comboImageUrl: '../images/order3.png',
        comboDetailsItems: [
            {
                name: 'Cheesy Chicken Quesadilla Combo',
                description: 'A satisfying combo featuring a cheesy chicken quesadilla served\
                 with a side of crisp tortilla chips and homemade salsa.',
                price: 5,
            },
            {
                name: 'Savory Beef Burrito',
                description: 'A hearty beef burrito stuffed with seasoned ground beef, black beans, rice, and melted\
                cheese, accompanied by a side of sour cream and salsa.',
                price: 4,
            },
            {
                name: 'Fish Taco Trio',
                description: 'Three flavorful fish tacos filled with crispy battered fish, shredded lettuce, tangy slaw, and a\
                drizzle of chipotle mayo, served with a side of seasoned fries.',
                price: 3,
            },
        ],
        totalPrice: function() {
            return this.comboDetailsItems.reduce((acc, curr) => acc + curr.price, 0)
        },
    },
]
export default contentData
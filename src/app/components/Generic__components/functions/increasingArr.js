function generateIncreasingArray(length = 10) {
    return Array.from({ length }, (_, index) => index + 1);
    // Array.from(arrLike, mapping function)
}
export default generateIncreasingArray;  
const findWords = (inputString: string, dictionary: string[]) => {
    if (!inputString || !dictionary.length) {
        return []
    }

    const words: string[] = []
    const inputStrCharCount: {[key:string]: number} = {}

    inputString.split('').forEach(char => {
        inputStrCharCount[char] = !!inputStrCharCount[char] ? inputStrCharCount[char] + 1 : 1
    })

    dictionary.forEach(str => {
        if (!str) {
            return
        }

        const charCounter = structuredClone(inputStrCharCount)
        let validWord = true

        str.split('').forEach(char => {
            if (!charCounter[char]) {
                validWord = false
            } else {
                charCounter[char]--
            }
        })

        if (validWord) {
            words.push(str)
        }
    })

    return words
}

export {findWords}
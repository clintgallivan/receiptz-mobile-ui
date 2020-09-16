/** @format */

let finalList = []
if (term !== '' && data.length > 0) {
  let searchedWords = term.toLowerCase().split(' ')
    finalList = data.filter(receipt => {
        let isSearched = true
        for (let i = 0; i < searchedWords.length; i++) {
            if (
                !receipt.metadata.storeName
                    .toLowerCase()
                    .includes(searchedWords[i])
            ) {
                isSearched = false
                break
            }
        }
        return isSearched
    })
} else {
    finalList = data
}

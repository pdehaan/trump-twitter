class BigData {
    data() {
        return {
            pagination: {
                data: "tweets",
                size: 1000,
            },
            permalink: data => `_data/bigData/tweets${data.pagination.pageNumber}.json`
        }
    }

    render(data) {
        return `[${data.pagination.items.map(item => JSON.stringify(item))}]`
    }
}

module.exports = BigData;
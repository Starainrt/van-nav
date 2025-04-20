export const openUrlCard = (searchString: string) => {
    const isValidURL = (input: string): boolean => {
        const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
        return urlPattern.test(input);
    }
    if (!isValidURL(searchString)) return [];
    const result = [
        {
            name: "打开输入网址",
            url: openUrl(searchString),
            desc: `直接打开 「${searchString}」`,
            id: 8800880010,
            logo: "url.ico",
            hide: false
        }
    ]
    return result;
}

const openUrl = (q: string) => {
    if (!q.startsWith("http")) {
		q = `http://${q}`
	}
    return `${q}`
}
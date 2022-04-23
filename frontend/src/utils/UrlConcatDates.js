
const UrlConcatDate = (URL, date_Start, date_End) => {

    let new_url = '';

    const array = URL.split('te=')
    
    array.map((str, index) => {
        let new_str = str;
        if (index === 0) {  
            new_str = new_str + `te=${date_Start}`
        }else if (index === 1) {
            new_str = new_str + `te=${date_End}`
        }

        new_url = new_url.concat(new_str)
    })
    console.log(new_url);//-----
    return new_url;
};

export default UrlConcatDate;
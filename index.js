exports.validate = (platform, socialMediaUrl) =>  {
    platform = platform.toLowerCase()
    const regexMap = {
        facebook:
		/^(https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*([\w\-]+\.?)(?:\/)?/i,
	    instagram: /(http(?:s)?:\/\/)?(?:www\.)?instagram\.com\/([a-zA-Z0-9_]+)/,
	    twitter: /(http(?:s)?:\/\/)?(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/,

	    linkedin:
		/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile|company)\/([a-zA-Z0-9_]+)/,
	    emailaddress: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        website: /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
    }
    let isValid = false
    if (regexMap[platform]){
        if (regexMap[platform].test(socialMediaUrl)) {
            isValid = true
        }
    }

    return isValid

}
exports.validate = (platform, socialMediaUrl) =>  {
    platform = platform.toLowerCase()
    const regexMap = {
        facebookUrl:
		/^(https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*([\w\-.]+)(?:\/)?/i,
	    instagramUrl: /http(?:s)?:\/\/(?:www\.)?instagram\.com\/([a-zA-Z0-9_]+)/,
	    twitterUrl: /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/,

	    linkedinUrl:
		/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile|company)\/([a-zA-Z0-9_]+)/,
	    emailaddress: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    }
    let isValid = false
    if (regexMap[platform]){
        if (regexMap[platform].test(socialMediaUrl)) {
            isValid = true
        }
    }

    return isValid

}
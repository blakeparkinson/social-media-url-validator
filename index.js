exports.validate = (platform, socialMediaUrl) =>  {
    platform = platform.toLowerCase()
    const regexMap = {
        facebook:
		/(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*([\w\-.]+)(?:\/)?/i,
	    instagram: /(https?)?:?(www)?instagram\.com/,
	    twitter:
		/(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w-]*\/)*([\w-]*)/,
	    linkedin:
		/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile|company)/,
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
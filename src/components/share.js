import React from 'react'
import {
    FacebookIcon,
	FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
    VKIcon,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share';

const Share = ({twitterHandle, title, url, tags }) => (
	<div className="post-social">
		<FacebookShareButton url={url} className="button facebook" >
			<FacebookIcon className="button-icon" size={40} round={true} />
		</FacebookShareButton>
		<TwitterShareButton url={url} className="button twitter" title={title} via={twitterHandle.split('@').join('')} hashtags={tags} >
			<TwitterIcon className="button-icon" size={40} round={true} />
		</TwitterShareButton>
        <VKShareButton url={url} className="button twitter" title={title} via={twitterHandle.split('@').join('')} hashtags={tags} >
			<VKIcon className="button-icon" size={40} round={true} />
		</VKShareButton>
        <WhatsappShareButton url={url} className="button twitter" title={title} via={twitterHandle.split('@').join('')} hashtags={tags} >
			<WhatsappIcon className="button-icon" size={40} round={true} />
		</WhatsappShareButton>
	</div>
);

export default Share;
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import NewsLetterPopup from './news-letter-popup/NewsLetterPopup';


const NewsletterSubscribe = () => {

  const url = process.env.REACT_APP_MAILCHIMP_URL

  console.log(url)

  return (
    
    <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <NewsLetterPopup status={status}
              message={message}
              onValidated={formData => subscribe(formData)}/>
      </div>
    )}
  />
  )

};

export default NewsletterSubscribe
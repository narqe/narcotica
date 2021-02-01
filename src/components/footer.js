import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"


const SOCIAL_MEDIA_LOGOS = {
  facebook: '/assets/social/Facebook.png',
  instagram: '/assets/social/Instagram.png',
  linkedin: '/assets/social/Linkedin.png',
  twitter: '/assets/social/Twitter.png',
  medium: '/assets/social/Medium.png',
  tumblr: '/assets/social/Tumblr.png',
};

const Footer = () => {
  const data = useStaticQuery(graphql`
  query SocialNetworkQuery {
    settingsJson {
      author
      contactEmail
      socialNetworks {
        tumblr
        linkedin
        instagram
        medium
      }
    }
  }
`)

const footerData = data.settingsJson;
const socialNetworksKeys = Object.keys(footerData.socialNetworks).filter(k => footerData.socialNetworks[k] && footerData.socialNetworks[k].length);
  
return (
  <footer> 
    <p>Developed by <a href={data.settingsJson.socialNetworks.linkedin} target="blank">{data.settingsJson.author}</a></p>
    <ul>
      {socialNetworksKeys.map((snk, i) => (
        <li className="Footer__SocialNetworksList__Item" key={i}>
          <Link
            to={footerData.socialNetworks[snk]} 
            title={snk.toUpperCase()} 
            target="blank" >
            <img className="img-fluid" src={SOCIAL_MEDIA_LOGOS[snk]} width="32px" height="32px" alt={snk.toUpperCase()} />
          </Link>
        </li>
      ))}
    </ul>
  </footer>
)}

export default Footer

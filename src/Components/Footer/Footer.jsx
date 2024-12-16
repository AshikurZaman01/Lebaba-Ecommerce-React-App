import Company from "./Company"
import ContactInfo from "./ContactInfo"
import InstagramFooter from "./InstagramFooter"
import UsefulLinks from "./UsefulLinks"

const Footer = () => {
    return (
        <footer className="section__container footer__container">

            <ContactInfo></ContactInfo>

            <Company></Company>

            <UsefulLinks></UsefulLinks>

            <InstagramFooter></InstagramFooter>

        </footer>
    )
}

export default Footer
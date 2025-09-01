import { Link } from "react-router-dom";


export default function ButtonLink({buttonLink, buttonText, ariaLabel}) {
    return (
        <Link className="button | rounded-full py-3 px-5 align-baseline text-md lg:text-sm 2xl:text-lg font-normal text-font-light"
                to={buttonLink} aria-label={ariaLabel}>
            {buttonText}
        </Link>
    )
}

import Link from "next/link"

const SearchItems = ({ key, href, title }) => {
    return <li {...key}><Link {...href}>{title}</Link></li>
}

export default SearchItems
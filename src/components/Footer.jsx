import { Footer as Foot } from "flowbite-react";

export default function Footer () {
    return (
        <Foot container={true}>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                <Foot.Brand
                    href="#"
                    src="/mugs/download.jpeg"
                    alt="Mughub Logo"
                    name="Mughub"
                />
                <Foot.LinkGroup>
                    <Foot.Link href="https://github.com/mitchdmarino/ecommerce-rails-client" target="_blank">
                    About
                    </Foot.Link>
                    <Foot.Link href="https://portfolio-mitchdmarino.vercel.app/">
                    Contact
                    </Foot.Link>
                </Foot.LinkGroup>
                </div>
                <Foot.Divider />
                <Foot.Copyright
                href="#"
                by="Mughub"
                year={2022}
                />
            </div>
        </Foot>
    )
}


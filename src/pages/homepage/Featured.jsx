import {Carousel} from 'flowbite-react'

export default function Featured () {
    return (
        <div>
            <h2 className='text-xl pb-5'>Halloween Releases</h2>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[500px] mx-auto">
                <Carousel>
                    <img
                    src="/mugs/pumpkinbooset.jpeg"
                    alt="Pumpkin boo set mugs"
                    />
                    <img
                    src="/mugs/happyhalloween.jpeg"
                    alt="Halloween Mug"
                    />
                    <img
                    src="/mugs/nevertooearlyforhalloween.jpeg"
                    alt="Never too early for halloween mug with skeleton"
                    />
                    <img
                    src="/mugs/WitchsBrew.jpeg"
                    alt="Witch's brew mug"
                    />
                    <img
                    src="/mugs/catmug.jpeg"
                    alt="Black cat in a pumpkin mug"
                    />
                    <img
                    src="/mugs/nightmarebeforechristmas.png"
                    alt="Jack Skelington in Nightmare before Christmas"
                    />
                </Carousel>
            </div>
        </div>
    )
}
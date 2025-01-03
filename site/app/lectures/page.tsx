import Link from 'next/link'

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Lectures</h1>
            <div>
                <Link className="flex flex-col space-y-2 mb-4" href="" target="_blank">
                    <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                        <ArrowIcon/>
                        <hr></hr>
                        <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                            A very, very, very long lecture title
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 w-[125px] tabular-nums">
                            Guest Name
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 w-[125px] tabular-nums">
                            January 1, 2025
                        </p>
                    </div>
                </Link>
            </div>
        </section>
    )
}

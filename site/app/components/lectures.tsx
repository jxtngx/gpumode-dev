import Link from 'next/link'
import ArrowIcon from 'app/components/arrowicon'

// copy and paste the below lines for a new lecture
// append to the end of the list
// then highlight and uncomment
{/*<div>*/}
{/*    <Link className="flex flex-col space-y-2 mb-4" href="https://youtu.be/NQ-0D5Ti2dc?si=nGiZDKQmZkmIeaF-"*/}
{/*          target="_blank">*/}
{/*        <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">*/}
{/*            <ArrowIcon/>*/}
{/*            <hr></hr>*/}
{/*            <p className="text-neutral-900 dark:text-neutral-100 w-[500px]">*/}
{/*                Recap Ch. 1-3 from the PMPP book*/}
{/*            </p>*/}
{/*            <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">*/}
{/*                Andreas Koepf*/}
{/*            </p>*/}
{/*        </div>*/}
{/*    </Link>*/}
{/*</div>*/}


export default function Lectures() {
    return (
        <div>
            <div>
                <Link className="flex flex-col space-y-2 mb-4" href="https://youtu.be/LuhJEEJQgUM?si=4tDQje03sfJkcNe-"
                      target="_blank">
                    <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                        <ArrowIcon/>
                        <hr></hr>
                        <p className="text-neutral-900 dark:text-neutral-100 w-[450px]">
                            Profiling and Integrating CUDA kernels in PyTorch
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums">
                            Mark Saroufim
                        </p>
                    </div>
                </Link>
            </div>
            <div>
                <Link className="flex flex-col space-y-2 mb-4" href="https://youtu.be/NQ-0D5Ti2dc?si=nGiZDKQmZkmIeaF-"
                      target="_blank">
                    <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                        <ArrowIcon/>
                        <hr></hr>
                        <p className="text-neutral-900 dark:text-neutral-100 w-[450px]">
                            Recap Ch. 1-3 from the PMPP book
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums">
                            Andreas Koepf
                        </p>
                    </div>
                </Link>
            </div>
            <div>
                <Link className="flex flex-col space-y-2 mb-4" href="https://youtu.be/4sgKnKbR-WE?si=WB86WNAosplGfy49"
                      target="_blank">
                    <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                        <ArrowIcon/>
                        <hr></hr>
                        <p className="text-neutral-900 dark:text-neutral-100 w-[450px]">
                            Getting Started With CUDA for Python
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums">
                            Jeremy Howard
                        </p>
                    </div>
                </Link>
            </div>
            <div>
                <Link className="flex flex-col space-y-2 mb-4" href="https://youtu.be/lTmYrKwjSOU?si=HjjOuzMcFNrDVZQb"
                      target="_blank">
                    <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                        <ArrowIcon/>
                        <hr></hr>
                        <p className="text-neutral-900 dark:text-neutral-100 w-[450px]">
                            Intro to Compute and Memory Architecture
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums">
                            Thomas Viehmann
                        </p>
                    </div>
                </Link>
            </div>
            <div>
                <Link className="flex flex-col space-y-2 mb-4" href="https://youtu.be/wVsR-YhaHlM?si=1mTOZ7PkBd_ExGAX"
                      target="_blank">
                    <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                        <ArrowIcon/>
                        <hr></hr>
                        <p className="text-neutral-900 dark:text-neutral-100 w-[450px]">
                            Going Further with CUDA for Python
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 w-[200px] tabular-nums">
                            Thomas Viehmann
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}


import Link from 'next/link'
import ArrowIconRight from 'app/components/arrowIconRight'

export default function UpcomingLectures() {
    return (
        <div>
            <div className="flex flex-col space-y-3 mb-4">
                <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                    <ArrowIconRight/>
                    <hr/>
                    <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                        Mosaic GPU
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                        Adam Paszke
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                        Jan 18, 2000 GMT
                    </p>
                </div>
                <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                    <ArrowIconRight/>
                    <hr/>
                    <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                        Flash Inference
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                        Zihao Ye
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                        Jan 25, 2000 GMT
                    </p>
                </div>
                <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                    <ArrowIconRight/>
                    <hr/>
                    <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                        NVIDIA Profiling
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                        TBD
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                        Feb 1, 2000 GMT
                    </p>
                </div>
                <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                    <ArrowIconRight/>
                    <hr/>
                    <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                        Outperforming CUBLAS
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                        @pranjalssh
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                        Feb 8, 2000 GMT
                    </p>
                </div>
                <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                    <ArrowIconRight/>
                    <hr/>
                    <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                        Efficient MatMul on Turing GPUs
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                        Erik Schultheis
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                        Feb 15, 2000 GMT
                    </p>
                </div>
                <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                    <ArrowIconRight/>
                    <hr/>
                    <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                        Distributed GEMM
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                        Ali Hassani
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                        Feb 22, 2000 GMT
                    </p>
                </div>
                <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                    <ArrowIconRight/>
                    <hr/>
                    <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                        Low Bit Metal Kernels
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                        Manuel Candales
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                        Mar 1, 2000 GMT
                    </p>
                </div>
                <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                    <ArrowIconRight/>
                    <hr/>
                    <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                        Tips for learning Triton
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                        Umar Jamil
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                        Mar 1, 2000 GMT
                    </p>
                </div>
                <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
                    <ArrowIconRight/>
                    <hr/>
                    <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                        Consumer GPU Performance
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                        Jake Cannel
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                        Mar 15, 2000 GMT
                    </p>
                </div>
            </div>
        </div>
    )
}


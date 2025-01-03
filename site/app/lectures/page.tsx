import Link from 'next/link'
import Lectures from 'app/components/lectures'

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Lectures</h1>
            <p className="mb-4">
                {`Links to each recording are provided below. Check out the `}
            <Link href="https://github.com/gpu-mode/lectures">
                 <u>GitHub repo</u>
            </Link>
                {` for accompanying code and slides. `}
            </p>
            <br/>
            <Lectures/>
        </section>
    )
}

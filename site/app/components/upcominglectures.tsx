import ArrowIconRight from 'app/components/arrowIconRight'
import { readXMLFile } from 'app/lectures/utils'

export default async function UpcomingLectures() {

    try {
        const data = readXMLFile('app/public/future_events.json');
        
        // Try different ways to access the lectures array
        const lectures = data?.lectures?.lecture || data?.lecture || data || [];

        return (
            <div>
                <div className="flex flex-col space-y-3 mb-4">
                    {Array.isArray(lectures) ? (
                        lectures.map((lecture, index) => (
                            <div 
                                key={`lecture-${index}`} 
                                className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2"
                            >
                                <ArrowIconRight/>
                                <hr/>
                                <p className="text-neutral-900 dark:text-neutral-100 w-[300px]">
                                    {lecture.title || lecture.Title}
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-400 w-[175px]">
                                    {lecture.guest || lecture.Guest}
                                </p>
                                <p className="text-neutral-900 dark:text-neutral-100 text-right w-[175px]">
                                    {lecture.date || lecture.Date}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>No lectures found</div>
                    )}
                </div>
            </div>
        )
    } catch (error) {
        console.error('Error reading lectures:', error);
        return <div>Unable to load lectures</div>;
    }
}


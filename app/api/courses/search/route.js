import { NextResponse } from "next/server";
import courses from '../data.json'

export async function GET(request){
    const {searchParams} = new URL (request.url)
    const query = searchParams.get('query') 
    const filteredCourses = courses.filter((courses)=>{
        return courses.title.toLowerCase().includes(query.toLocaleLowerCase());
    });

    console.log(filteredCourses)
    return NextResponse.json(filteredCourses)
}
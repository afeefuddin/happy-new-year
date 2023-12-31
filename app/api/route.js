import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';



const genAI = new GoogleGenerativeAI(process.env.API_KEY);
export async function GET(request) {
  // Perform your API call here
   try {
    // console.log(request.nextUrl.searchParams.get('name'))
    // console.log(params.get('name'))
    // const url = new URL(request.url)
    const name =  request.nextUrl.searchParams.get('name')
    console.log(name)
    // console.log(params)
    console.log('Here')
     const model = genAI.getGenerativeModel({ model: "gemini-pro"});
     const prompt = `Consider yourself an AI that predicts the future of people in 2024 in 75-100 words. Please dont excees 100 words. Your answers should be motivating, positive
     filled with humor. Reply in a way that you are talking to that person, use simple grammar. Also no headings and all.
      Example : You will acheive xyz, but you will still have to wait for a date. Predict the future of `+name
     const result = await model.generateContent(prompt);
     const response =  await result.response;
     const text = response.text()
    return NextResponse.json({'response' : text});
   } catch (error) {
    return NextResponse.json({"error":error.message})
   }
  
  // return NextResponse.json({
  //   "Hello" :"yes"
  // })
}
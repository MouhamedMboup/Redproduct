import { connectToMongoDB } from '@/dbConfig/dbconfig';
import User from '@/models/userModel';
import Hotel from '@/models/hotelModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connectToMongoDB();

export async function POST(request: NextRequest) {
	try {
		// 1- grab the data inside the request
		const reqBody = await request.json();
		// 1.1 destructure the data
		const { hotelName, hotelAddress, hotelEmail, hotelPhone, hotelImage } = reqBody;
		console.log(reqBody);


		// Create a new hotel if hotel data is provided
		if (hotelName && hotelAddress && hotelEmail && hotelPhone && hotelImage) {
			const newHotel = new Hotel({
				name: hotelName,
				address: hotelAddress,
				email: hotelEmail,
				phone: hotelPhone,
				image: hotelImage, // Save the image URL
			});
			await newHotel.save();
		}

		// user's cookies
		const response = NextResponse.json({
			message: 'Hotel added Successfuly',
			success: true,
		});

		
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

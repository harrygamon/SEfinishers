import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, projectDetails, urgency } = body;

    // Basic validation
    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: 'Name, email, and project details are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email to SE Finishers (info@sefinishers.co.uk)
    // 2. Send a confirmation email to the user
    // 3. Store the inquiry in a database
    // 
    // For now, we'll just log the inquiry and return success
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      service,
      projectDetails,
      urgency,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: 'Thank you! Your message has been sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
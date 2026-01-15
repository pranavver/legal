# Legal Portal

A comprehensive web application designed for legal professionals, law students, and anyone interested in the Indian legal system. This platform provides a centralized hub for accessing a wide range of legal resources and information.

## Features

This application consolidates various legal resources into a single, easy-to-use interface. Key features include:

*   🏛️ **Court Information:** Access information on the Supreme Court and various High Courts.
*   ⚖️ **Bare Acts:** Browse and search a collection of Indian Bare Acts.
*   👨‍⚖️ **Recent Judgments:** Stay updated with the latest court judgments and notifications.
*   📰 **Legal News:** Get the latest news and happenings in the legal world.
*   ✍️ **Legal Blogs:** Read articles and insights on various aspects of Indian law.
*   📖 **Law Dictionary:** A comprehensive and searchable dictionary of legal terminology.
*   👥 **Bar Associations:** A directory of bar associations across India.
*   🗓️ **Legal Events:** Keep track of upcoming legal events, seminars, and conferences.
*   📂 **RTI (Right to Information):** Resources and information related to RTI.
*   📅 **Calendar:** A calendar to keep track of important legal dates and events.

## Technology Stack

This project is built with a modern, robust, and scalable technology stack:

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Backend & Database:** [Supabase](https://supabase.io/) (PostgreSQL)
*   **UI Components:** [Lucide React](https://lucide.dev/guide/packages/lucide-react) for icons.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd nextjs
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env.local` file in the `nextjs` directory and add your Supabase project credentials:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```
    Replace `your-supabase-url` and `your-supabase-anon-key` with your actual Supabase URL and anon key.

5.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database

The application uses Supabase for its backend services, including a PostgreSQL database. The database schema and initial migration are included in the `nextjs/supabase/migrations` directory. When you set up your Supabase project, you can run this migration to create the necessary tables and policies.

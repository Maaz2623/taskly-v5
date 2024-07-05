export default async function AuthLayout({children}: {children: React.ReactNode}){
    return(
        <main className="w-full min-h-screen flex justify-center items-center">
            {children}
        </main>
    )
}
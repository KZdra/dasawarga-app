import Button from "../components/button"
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <div className="mt-3 flex gap-3 items-center justify-center">
            <Button
            title = "test"
            logoUrl='/images/logo.png'
            href='/layanan/1'
            />
             <Button
            title = "test"
            logoUrl='/images/logo.png'
            href='/layanan/2'
            />
             <Button
            title = "test"
            logoUrl='/images/logo.png'
            href='/layanan/3'
            />
             <Button
            title = "test"
            logoUrl='/images/logo.png'
            href='/layanan/4'
            />
           </div>
           <div className='container p-3 mx-auto'>
        {children}
        </div>
      </section>
    )
  }
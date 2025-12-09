

export default function Industries() {
  return (
   <section id="industries">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Industries & Use Cases</h2>
                    <p className="section-subtitle">
                        Versatile solutions across multiple sectors
                    </p>
                </div>
                <div className="industries-grid">
                    <div className="industry-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <h3>Retail & Grocery</h3>
                        <p>Transform traditional stores into smart, automated spaces</p>
                    </div>
                     <div className="industry-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9"></path><path d="M15 2v20"></path><path d="M21 10h-6"></path><path d="M21 6h-6"></path><path d="M21 14h-6"></path><path d="M21 18h-6"></path></svg>
                        <h3>Hospitality</h3>
                        <p>Provide seamless guest experiences with automated services</p>
                    </div>
                     <div className="industry-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <h3>Corporate</h3>
                        <p>Smart micro-markets and office automation solutions</p>
                    </div>
                     <div className="industry-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                        <h3>Residential</h3>
                        <p>Building automation and smart home integration</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

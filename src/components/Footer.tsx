
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Nurture</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are a leading leader in land, sea, science and  
              technology innovation that impacts life through agriculture. 
              We help every  
              farmer innovate agriculture.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Features</div>
              <div>Pricing</div>
              <div>Portfolio</div>
              <div>Roadmap</div>
              <div>Channels</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Blog</div>
              <div>User guides</div>
              <div>Webinars</div>
              <div>Knowledge Base</div>
              <div>FAQ</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">GUESTS</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>CTO's</div>
            </div>
            
            <h3 className="font-semibold mb-4 mt-6">HELP</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Guide</div>
              <div>API Status</div>
              <div>Tips & Tricks</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 bg-gray-700 rounded"></div>
            <div className="w-6 h-6 bg-gray-700 rounded"></div>
            <div className="w-6 h-6 bg-gray-700 rounded"></div>
            <div className="w-6 h-6 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

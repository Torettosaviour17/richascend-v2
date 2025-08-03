// components/news/NewsFooter.tsx
export const NewsFooter = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Daily Chronicle
            </h3>
            <p className="text-gray-400 mb-4">
              Delivering accurate and timely news since 1995. Our mission is to
              inform, educate, and inspire our readers.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((id) => (
                <div
                  key={id}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 cursor-pointer transition-colors"
                >
                  <div className="w-5 h-5 bg-gray-400 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {["Home", "About Us", "Contact", "Careers", "Advertise"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                "World",
                "Politics",
                "Business",
                "Technology",
                "Science",
                "Health",
                "Entertainment",
                "Sports",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest news directly in
              your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none w-full"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Daily Chronicle. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

import { Flag, Eye, Star } from "lucide-react";

export default function MissionValues() {
  return (
    <section id="mission-values" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mission <span className="text-purple-600">& Values</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-purple-600 mx-auto rounded"></div>
        </div>

        {/* Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/mission.png"
              alt="Mission and Values"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Driving Success Through Strategic Excellence
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              At PathFinder, we're committed to transforming businesses through
              innovative strategies and expert guidance. Our comprehensive
              approach combines industry expertise with cutting-edge solutions
              to deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-6 py-2 bg-purple-900 text-purple-400 rounded-full font-medium shadow-sm">
                3+ Years Experience
              </span>
              <span className="px-6 py-2 bg-purple-900 text-purple-400 rounded-full font-medium shadow-sm">
                Global Reach
              </span>
              <span className="px-6 py-2 bg-purple-900 text-purple-400 rounded-full font-medium shadow-sm">
                Expert Team
              </span>
            </div>
          </div>
        </div>

        {/* Mission / Vision / Promise Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-700 bg-gray-900">
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-purple-800">
              <Flag className="text-purple-500" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
            <p className="text-gray-400">
              To empower businesses with innovative solutions and strategic
              guidance, enabling them to achieve sustainable growth and market
              leadership.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-700 bg-gray-900">
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-purple-800">
              <Eye className="text-purple-500" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
            <p className="text-gray-400">
              To be the globally recognized leader in business consulting,
              known for transforming organizations and creating lasting success
              stories.
            </p>
          </div>

          {/* Promise */}
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-700 bg-gray-900">
            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-purple-800">
              <Star className="text-purple-500" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2">Our Promise</h4>
            <p className="text-gray-400">
              We commit to delivering measurable results, maintaining the highest
              professional standards, and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

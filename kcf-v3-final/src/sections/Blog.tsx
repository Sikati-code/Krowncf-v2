import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, User, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/types';

interface BlogProps {
  posts: BlogPost[];
  t: (key: string) => string;
}

export function BlogSection({ posts, t }: BlogProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative py-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-kcf-red/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-kcf-gold/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <BookOpen className="w-4 h-4 text-kcf-red" />
            <span className="text-sm text-white/80">{t('fromOurBlog')}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('latestInsights')}
          </h2>
          <p
            className={`text-white/60 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('blogDescription')}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-kcf-red/50 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-kcf-red text-white text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-white/50 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-kcf-red transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-kcf-red font-medium hover:gap-3 transition-all"
                >
                  {t('readMore')}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Visit Blog Button */}
        <div
          className={`text-center transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://krowncreativefactory.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-kcf-red hover:bg-kcf-dark-red text-white px-8 py-6 text-lg rounded-full shadow-kcf-lg hover:shadow-glow-lg transition-all hover:scale-105"
            >
              {t('visitBlog')}
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

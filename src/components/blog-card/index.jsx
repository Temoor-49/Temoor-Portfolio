import { PiNewspaper } from 'react-icons/pi';
import { skeleton } from '../../utils';

const BlogCard = ({ loading, blog, googleAnalyticsId }) => {
  if (!blog.display) {
    return null;
  }

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-3">
              {loading ? (
                skeleton({
                  widthCls: 'w-12',
                  heightCls: 'h-12',
                  className: 'rounded-xl',
                })
              ) : (
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                  <PiNewspaper className="text-2xl" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-28', heightCls: 'h-8' })
                    : 'My Articles'}
                </h3>
                <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                  {loading
                    ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                    : 'Blog feature coming soon'}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-8">
            <PiNewspaper className="mx-auto h-16 w-16 opacity-30 mb-4" />
            <p className="text-base-content opacity-50">
              Blog feature is currently under development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
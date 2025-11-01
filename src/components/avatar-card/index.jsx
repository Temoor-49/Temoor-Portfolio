import { FALLBACK_IMAGE } from '../../constants';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

const AvatarCard = ({ profile, loading, avatarRing, resumeFileUrl }) => {
  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({ widthCls: 'w-full', heightCls: 'h-full', shape: '' })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div className={`mb-8 rounded-full w-32 h-32 ${avatarRing ? 'ring-3 ring-primary ring-offset-base-100 ring-offset-2' : ''}`}>
              <LazyImage src={profile.avatar ? profile.avatar : FALLBACK_IMAGE} alt={profile.name} placeholder={skeleton({ widthCls: 'w-full', heightCls: 'h-full', shape: '' })} />
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? skeleton({ widthCls: 'w-48', heightCls: 'h-8' }) : <span className="text-base-content opacity-70">{profile.name}</span>}
          </h5>
          <div className="mt-3 text-base-content font-mono">
            {loading || !profile ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' }) : profile.bio}
          </div>
        </div>
        {resumeFileUrl && (loading ? (
          <div className="mt-6">{skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}</div>
        ) : (
          <a href={resumeFileUrl} target="_blank" className="btn btn-outline btn-sm text-xs mt-6 opacity-50" download rel="noreferrer">
            Download Resume
          </a>
        ))}
      </div>
    </div>
  );
};

export default AvatarCard;
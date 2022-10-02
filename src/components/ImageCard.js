import React from 'react';

const ImageCard = ({image}) => {

    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
            <div className="font-bold text-green-600 text-xl mb-2">
                Photo by {image.user}
            </div>
            <ul>
                <li>
                    <strong>Views: </strong> {image.views}
                </li>
                <li>
                    <strong>Downloads: </strong> {image.downloads}
                </li>
                <li>
                    <strong>Likes: </strong> {image.likes}
                </li>
            </ul>
        </div>
        <div className="px-6 py-4">
            {image.tags.split(', ').map(tag => (
                <span key={image.id} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-1'>
                    #{tag}
                </span>
            ))}
        </div>
    </div>
    );
};

export default ImageCard;

import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../common/OptimizedImage';

interface Picture {
  img: { src: string; w: number; h: number };
  sources: { [key: string]: Array<{ src: string; w: number; h: number }> };
}

interface ProjectGalleryProps {
  images: Picture[];
  projectTitle: string;
  projectColor?: string;
}

const ProjectGallery: FC<ProjectGalleryProps> = ({
  images,
  projectTitle,
  projectColor = '#5A7E8C'
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  if (images.length === 0) return null;

  return (
    <>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-sm font-semibold tracking-wider uppercase font-heading mb-4 block"
              style={{ color: projectColor }}
            >
              Project Gallery
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 font-heading">
              {projectTitle} - Project Images
            </h2>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => openLightbox(index)}
              >
                <OptimizedImage
                  picture={image}
                  alt={`${projectTitle} - Image ${index + 1}`}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>

                {/* Hover Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: projectColor }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedImage}
              className="max-w-full max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <OptimizedImage
                picture={images[selectedImage]}
                alt={`${projectTitle} - Image ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain"
                loading="eager"
                sizes="100vw"
              />
            </motion.div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGallery;
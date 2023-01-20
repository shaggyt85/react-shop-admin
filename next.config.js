/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'api.lorem.space', 'tailwindui.com', 'placeimg.com',
              'api.escuelajs.co', 'm.media-amazon.com', 'images-na.ssl-images-amazon.com',
            'cdn.eso.org', 'upload.wikimedia.org', 'picsum.photos', 'images.pexels.com', 'staticfanpage.akamaized.net', 
            'sfondo.info', 'cdn.pixabay.com', 'cdn11.bigcommerce.com', 'www.ventennipaperoni.com',
            'i1.wp.com', 'www.pexels.com', 'www.inturchia.it', 'encrypted-tbn0.gstatic.com',
            'th-thumbnailer.cdn-si-edu.com', 'qrius.com', 'hips.hearstapps.com', 'www.google.com', 'media.istockphoto.com',
            'citynews-lecceprima.stgy.ovh', 'i.picsum.photos', 'assets.afcdn.com', 'www.ais.th',
            'contigo.it', 'fashion.thewom.it', '1.bp.blogspot.com', 'compass-media.vogue.it', 'www.menshealth.it',
            'www.pourfemme.it', 'static.fanpage.it', 'www.guidomaggi.it', 'www.labottegadelcalzolaio.it', 
            'static.nike.com', 'www.track-vr.it', 'www.dhresource.com', 'www.leftymarketing.it'  ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

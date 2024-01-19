/*
importing video files
*/
//importing origin video files
import mmfe from './Videos/or_vid/mmfe.mp4'
import retnoid from './Videos/or_vid/retnoid.mp4';
import ritual_face from './Videos/or_vid/ritual_face.mp4';
import ritual_noglobal from './Videos/or_vid/ritual_noglobal.mp4';
import service from './Videos/or_vid/service.mp4';

//importing freelance video files
import Book_Promo_Comp from './Videos/fl_vid/Book_Promo_Comp.mp4';
import montclair_newslab_covid from './Videos/fl_vid/montclair_newslab_covid.mp4';
import montclair_newslab_legal from './Videos/fl_vid/montclair_newslab_legal.mp4';
import montclair_newslab_voting from './Videos/fl_vid/montclair_newslab_voting.mp4';

//cards for the work component
export const workCards = [
    {
        title: 'Freelance',
        page: '/Freelance',
        image: './Images/fl_img/card.png'
    },
    {
        title: 'Origins',
        page:'/Origins',
        image:'./Images/or_img/org_card.png'
    },
    {
        title: 'Outer Stuff',
        page: '/Outer',
        image: './Images/out_img/card.png'
    },
    {
        title:'Spring Hills',
        page: '/SpringHills',
        image:'./Images/sh_img/spring_card.jpeg'
    },
    {
        title:'Videos',
        page:'/Videos',
        image:'./Images/vid_img/vid_card.png'
    },
    {
        title:'Learning Managment System',
        page: '/Lms',
        image:'./Images/lms_img/lms_card.jpg'
    }
];

/*
Origins data
*/
export const originsFiles = [
    {
        title:'Clear Improvement',
        path:'./Files/or_pdf/chia_mask.pdf',
        image:'./Images/or_img/chia.png'
    },
    {
        title:'Discover Origins',
        path:'./Files/or_pdf/discover_origins.pdf',
        image:'./Images/or_img/discover.png'
    },
    {
        title:'Mega-Mushroom Dark Spot Serum',
        path:'./Files/or_pdf/mmdss.pdf',
        image:'./Images/or_img/mmds.png'
    },
    {
        title:'Mega-Mushroom Fortifying Emulsion',
        path:'./Files/or_pdf/mmfe.pdf',
        image:'./Images/or_img/mmf.png'
    },
    {
        title:'PLANTFUSION FRANCHISE',
        path:'./Files/or_pdf/pf_franchise.pdf',
        image:'./Images/or_img/pff.png'
    },
    {
        title:'PLANTFUSION',
        path:'./Files/or_pdf/plant_fusion.pdf',
        image:'./Images/or_img/pf.png'
    }
];

export const originsVideos =  [
    {
        title:'MMFE',
        path:mmfe
    },
    {
        title:'Retnoid',
        path:retnoid
    },
    {
        title:'Ritual Face',
        path:ritual_face
    },
    {
        title:'Ritual Global',
        path:ritual_noglobal
    },
    {
        title:'Service',
        path:service
    }
];

/*
Outer data
*/
export const outerImages  = [
    {
        title: 'outer stuff',
        path:'./Images/out_img/outerstuff.png'
    },
    {
        title: 'outer stuff 2',
        path:'./Images/out_img/outerstuff2.png'
    },
    {
        title:'outer stuff 3',
        path:'./Images/out_img/outer3.jpg'
    }
];

/*
Freelance data
*/
export const freelanceImages = [
    {
        title:'mock business',
        path:'./Images/fl_img/mock-bus.png'
    },
    {
        title:'mock canvas',
        path:'./Images/fl_img/mock-can.png'
    },
    {
        title:'woman holding jojo',
        path:'./Images/fl_img/jojo-hold.png'
    },
    {
        title:'jojo',
        path:'./Images/fl_img/jojo.png'
    },
    {
        title:'freelance',
        path:'./Images/fl_img/freelance.png'
    },
    {
        title:'folded sweater',
        path:'./Images/fl_img/mock-fold.png'
    },
    {
        title:'lifted promo',
        path:'./Images/fl_img/lifted-promo.png'
    },
    {
        title:'mock sweater',
        path:'./Images/fl_img/mock-sweat.png'
    }
];

export const freelanceVideos = [
    {
        title: 'Book Promo',
        path:Book_Promo_Comp
    },
    {
        title:'Covid Newslab',
        path:montclair_newslab_covid
    },
    {
        title:'Legalization of Marijuana',
        path:montclair_newslab_legal
    },
    {
        title:'Voting Newslab',
        path:montclair_newslab_voting
    }
];

/*
Spring hills data
*/
export const springFiles = [
    {
        title:'Onboarding',
        path:'./Files/sh_pdf/Brand_OnBoarding.pdf',
        image:'./Images/sh_img/branding_cover.png'
    },
    {
        title:'Social Metrics',
        path:'./Files/sh_pdf/metrics_report.pdf',
        image:'./Images/sh_img/social_metric.png'
    },
    {
        title:'Malnutritian Information',
        path:'./Files/sh_pdf/malnutritian.pdf',
        image:'./Images/sh_img/malnutritian.png'
    },
    {
        title:'Partnership',
        path:'./Files/sh_pdf/partnerships.pdf',
        image:'./Images/sh_img/partner.png'
    }
];

export const springImages = [
    {
        title: 'Mac mockup',
        path: './Images/sh_img/imac-mockup.png'
    },
    {
        title: 'Magazine Mockup',
        path: './Images/sh_img/mag-mockup.png'
    },
    {
        title: 'Macbook Mockup',
        path: './Images/sh_img/macbook-mockup.png'
    },
    {
        title: 'iPhone Mockup',
        path: './Images/sh_img/iphone-mockup.png'
    }
];

//lms file
export const lmsPDF = {
        title: 'Learning Management System Origins',
        path:'./Files/lms_pdf/lms.pdf',
        image:'./Images/lms_img/disc.png'
    }

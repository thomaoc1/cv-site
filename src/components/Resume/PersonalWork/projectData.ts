export interface SingleWork {
    title: string,
    desc: string,
    link: string,
}

export interface GroupedSingleWork {
    subheading: string,
    projects: SingleWork[],
}

export const allProjects: GroupedSingleWork[] = [
    {
        subheading: 'Machine Learning',
        projects: [
            {
                title: 'Fine-tuning VisionTransformer (ViT)',
                desc: 'Reproduced results from original ViT paper, specifically performance after fine-tuning on Oxford Pets dataset using the HuggingFace API.',
                link: 'https://github.com/thomaoc1/FineTuningViT',
            },
            {
                title: 'MNIST NumpyNet',
                desc: 'Neural Network coded from scratch using only the Python Numpy Library.',
                link: 'https://github.com/thomaoc1/MNISTNumPyNet',
            },
            {
                title: 'MNIST Detection',
                desc: 'Solved the MNIST handwritten digit dataset using a variety of Machine Learning techniques ranging from an SVM to CNN using Scikit-Learn and Tensorflow.',
                link: 'https://github.com/thomaoc1/MNIST-Written-Digit-Detection',
            }
        ]
    },
    {
        subheading: 'Front-end Development',
        projects: [
            {
                title: 'Resume Website using React',
                desc: 'Code behind this website ;)',
                link: 'https://github.com/thomaoc1/cv-site',
            }

        ]
    },
    {
        subheading: 'General Programming',
        projects: [
            {
                title: 'CandyCrush',
                desc: 'CandyCrush lookalike in C++ using a minimal GUI library called FLTK',
                link: 'https://github.com/thomaoc1/CandyCrush',
            },
            {
                title: 'Chatroom in C',
                desc: 'Very simple chatroom in C using sockets.',
                link: 'https://github.com/thomaoc1/chatroom-C',
            },
            {
                title: 'Graph k-Degeneracy',
                desc: 'Large Graph k-(Degeneracy, -Cores and -Colouring) Calculator. Loads large graphs and calculates the mentioned properties in Java.',
                link: 'https://github.com/thomaoc1/chatroom-C',
            }
        ]
    },
]

export const contributions: SingleWork[] = [
    {
        title: 'albumentations',
        desc: 'Contributed by optimising a Coarse Dropout implementation.',
        link: 'https://github.com/albumentations-team/albumentations',
    },
    {
        title: 'Pysat Library',
        desc: 'Contributed to Pysat documentation.',
        link: 'https://github.com/pysathq/pysat',
    },
]
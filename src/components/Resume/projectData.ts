const projects = [
    {
        subheading: 'Machine Learning',
        projects: [
            {
                title: 'Fine-tuning VisionTransformer (ViT)',
                desc: 'Reproduced results from original ViT paper, specifically performance after fine-tuning on Oxford Pets dataset using the HuggingFace API.',
                link: 'https://github.com/thomaoc1/FineTuningViT',
                icon_src: '/icons/hg-icon.png',
                id: 'hugging-face-icon',
                alt: 'HuggingFace Icon',
            },
            {
                title: 'MNIST NumpyNet',
                desc: 'Neural Network coded from scratch using only the Python Numpy Library.',
                link: 'https://github.com/thomaoc1/MNISTNumPyNet',
                icon_src: '/icons/numpy-icon.png',
                id: 'numpy-icon',
                alt: 'Numpy Icon',
            },
            {
                title: 'MNIST Detection',
                desc: 'Solved the MNIST handwritten digit dataset using a variety of Machine Learning techniques ranging from an SVM to CNN using Scikit-Learn and Tensorflow.',
                link: 'https://github.com/thomaoc1/MNIST-Written-Digit-Detection',
                icon_src: '/icons/scikit-icon.png',
                id: 'scikit-icon',
                alt: 'scikit Icon',
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
                icon_src: '/icons/cpp-icon.png',
                id: 'cpp-icon',
                alt: 'C++ Icon',
            },
            {
                title: 'Chatroom in C',
                desc: 'Very simple chatroom in C using sockets.',
                link: 'https://github.com/thomaoc1/chatroom-C',
                icon_src: '/icons/c-icon.png',
                id: 'c-icon',
                alt: 'C icon',
            },
            {
                title: 'Graph k-Degeneracy',
                desc: 'Large Graph k-(Degeneracy, -Cores and -Colouring) Calculator. Loads large graphs and calculates the mentioned properties in Java.',
                link: 'https://github.com/thomaoc1/chatroom-C',
                icon_src: '/icons/java-icon.png',
                id: 'java-icon',
                alt: 'Java icon',
            }
        ]
    },
    {
        subheading: 'Contributions',
        projects: [
            {
                title: 'Pysat Library',
                desc: 'Contributed to Pysat documentation.',
                link: 'https://github.com/pysathq/pysat',
                icon_src: '/icons/pysat-icon.png',
                id: 'pysat-icon',
                alt: 'Pysat Icon',
            }
        ]
    }
]

export default projects;
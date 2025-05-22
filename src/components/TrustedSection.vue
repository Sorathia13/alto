<template>
    <section id="realisations" class="trusted">
        <h2 class="animate fade-in-up">Ils Nous Ont Fait Confiance</h2>
        <div class="trusted-gallery">
            <div class="project-container">
                <img src="@/assets/images/project1.png" alt="Project 1" />
            </div>
            <div class="project-container">
                <img src="@/assets/images/project2.png" alt="Project 2" />
            </div>
            <div class="project-container">
                <img src="@/assets/images/project3.png" alt="Project 3" />
            </div>
            <div class="project-container">
                <img src="@/assets/images/project4.png" alt="Project 4" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.trusted {
    text-align: center;
    padding: 4rem 2rem;
    background-color: var(--color-background);
}

h2 {
    font-size: 4rem;
    color: var(--color-primary);
    margin-bottom: 2rem;
    font-weight: 600;
    letter-spacing: -0.2px;
}

.trusted-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
}

.project-container {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.project-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    border-radius: 12px;
}

.project-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.4s ease;
    z-index: 1;
    border-radius: 12px;
}

.project-container:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
}

.project-container:hover img {
    transform: scale(1.1);
}

.project-container:hover::after {
    background: rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
    h2 {
        font-size: 3.2rem;
    }

    .trusted-gallery {
        gap: 1.2rem;
    }

    .project-container {
        width: 180px;
        height: 180px;
    }
}

@media (max-width: 768px) {
    .trusted {
        padding: 3rem 1rem;
    }

    h2 {
        font-size: 2.8rem;
        margin-bottom: 1.5rem;
    }

    .trusted-gallery {
        gap: 1rem;
    }

    .project-container {
        width: 150px;
        height: 150px;
    }
}

@media (max-width: 480px) {
    .trusted {
        padding: 2rem 1rem;
    }

    h2 {
        font-size: 2.2rem;
        margin-bottom: 1.2rem;
    }

    .trusted-gallery {
        gap: 0.8rem;
    }

    .project-container {
        width: 130px;
        height: 130px;
    }
}
</style>
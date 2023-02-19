export interface UpdateSkill {
    skillName: string,
    skillImage: string,
    description: string,
    linkToSkillInfo: string
}

export interface UpdateGallery {
    galleryImage: string,
}

export interface UpdateProject {
    projectName: string,
    projectImage: string,
    projectDescription: string,
    techUsed: string,
    projectLink: string,
    gitRepo: string
}

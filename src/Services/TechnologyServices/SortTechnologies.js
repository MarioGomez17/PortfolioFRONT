function SortTechnologies(Technologies) {
  let SkillsTechnologies = {}
  Technologies.forEach((Technology) => {
    let Nombre_Skill = Technology.Skill_Technology.Name_Skill
    if (!SkillsTechnologies[Nombre_Skill]) {
      SkillsTechnologies[Nombre_Skill] = []
    }
    SkillsTechnologies[Nombre_Skill].push(Technology)
  })
  return SkillsTechnologies
}

export default SortTechnologies

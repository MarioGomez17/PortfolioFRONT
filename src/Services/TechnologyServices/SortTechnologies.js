function SortTechnologies(ProgrammingLanguages, Technologies) {
  let ProgrammingLanguagesTechnologies = []
  ProgrammingLanguages.forEach((Language) => {
    const AssociatedTechnologies = Technologies
      .filter(Technology => Technology.ProgrammingLanguage_Technology.Id_ProgrammingLanguage === Language.Id_ProgrammingLanguage);
    AssociatedTechnologies.sort((Technology1, Technology2) => Technology1.Name_Technology.localeCompare(Technology2.Name_Technology));
    ProgrammingLanguagesTechnologies.push({ ProgrammingLanguage: Language, Technologies: AssociatedTechnologies });
  });
  return ProgrammingLanguagesTechnologies
}

export default SortTechnologies
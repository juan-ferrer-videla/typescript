const getRole = (seniority) => {
  switch (seniority) {
    case "junior":
      return "low technical level, keep improving";
    case "senior":
      return "great technical level, keep improving";
    case "tech lead":
      return "super technical level";
    // case "ceo":
    //   return "You're the boss";
    default:
      const _ = seniority;
      throw new Error("This should be unreacheable");
  }
};

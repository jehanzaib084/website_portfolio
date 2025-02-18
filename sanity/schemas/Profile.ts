export const Profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
      options: {
        accept: ".pdf",
      },
    },
  ],
};
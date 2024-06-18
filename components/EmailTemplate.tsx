import * as React from "react";

interface EmailTemplateProps {
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
}) => (
  <div>
    <h1 className="text text-red-600">Hi, this is {"name"}</h1>
    <h2>
      I am interested in {"topic"}
      {message}
    </h2>
    <h3>Please contact me with {"email"}</h3>
  </div>
);

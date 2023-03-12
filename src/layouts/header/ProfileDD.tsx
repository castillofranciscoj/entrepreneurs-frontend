import React from "react";
import { DropdownItem } from "reactstrap";
import { User, FileText, Star, Settings, Droplet } from "react-feather";
import user1 from "../../assets/images/users/user1.jpg";
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react';

const ProfileDD = () => {
  const {data: session, status} = useSession({required: true})
  return (
    <div>
      <div className="d-flex gap-3 p-3 border-bottom pt-2 align-items-center">
        <Image
          src={session.user.image}
          alt="user"
          className="rounded-circle"
          width="60"
          height="60"
        />
        <span>
          <h6 className="mb-0">{session.user.name}</h6>
          <small>{session.user.email}</small>
        </span>
      </div>
    </div>
  );
};

export default ProfileDD;

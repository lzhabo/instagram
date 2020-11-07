import styled from "@emotion/styled";
import React, { useState } from "react";
import like from "@src/assets/like.svg";
import comment from "@src/assets/comment.svg";
import direct from "@src/assets/direct.svg";
import favoriets from "@src/assets/favoriets.svg";
import { IPost , IComment} from "@src/interfaces";

interface IProps {
  post: IPost;
  comments: IComment[];
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 13px;
  box-sizing: border-box;
`;

const Image = styled.img`
  cursor: pointer;
`;

const LeftBar = styled.div`
  display: flex;
  align-items: center;
  margin: -8px;
  & > * {
    margin: 8px;
  }
`;

const Text = styled.span<{ bold?: boolean; link?: boolean; thin?: boolean }>`
  font-size: 11px;
  line-height: 14px;
  letter-spacing: -0.165px;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ link, thin }) => {
  if (link) return "rgb(58,158,213)";
  else if (thin) return "rgba(0, 0, 0, 0.4)";
  else return "#000000";
}};
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  & > * {
    margin-bottom: 8px;
  }
`;

const PostFooter: React.FC<IProps> = ({post, comments}) => {
    const [openedComments, setOpenedComments] = useState<boolean>(false);

    return (
      <Root>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: 48
          }}
        >
          <LeftBar>
            <Image src={like} alt="like" />
            <Image src={comment} alt="comment" />
            <Image src={direct} alt="direct" />
          </LeftBar>
          <Image src={favoriets} alt="favoriets" />
        </div>
        <Text style={{ marginBottom: 8 }} bold>
          {post.likes}&nbsp;J’aime
        </Text>
        <Text style={{ marginBottom: 8 }}>
          <Text bold>{post.user.name}&nbsp;</Text>
          {post.description}
        </Text>
        {openedComments ? (
          <CommentContainer>
            {comments.map((comment, key) => (
              <Text key={key}>
                <Text bold>{comment.user.name}&nbsp;</Text>
                {comment.content}
              </Text>
            ))}
            <Text
              style={{ marginBottom: 24, cursor: "pointer", marginLeft: -8 }}
              onClick={() => setOpenedComments(false)}
              thin
            >
              Hide this shit
            </Text>
          </CommentContainer>
        ) : (
          <Text
            style={{ marginBottom: 24, cursor: "pointer" }}
            onClick={() => setOpenedComments(true)}
            thin
          >
            Voir les &nbsp;{comments.length}&nbsp;commentaires
          </Text>
        )}
      </Root>
    );
  }
;

export default PostFooter;

import { FC, useMemo, useState } from "react";
import NextLink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
  Chip,
} from "@mui/material";
import "animate.css";

import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHovered, product.images]);

  const inImage = useMemo(() => {
    return isHovered
      ? // ? "animate__animated animate__flipInY"
        "animate__animated animate__zoomIn animate__fast"
      : "animate__animated animate__fadeIn animate__slow";
    // : "animate__animated animate__zoomIn animate__faster"
  }, [isHovered]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        {/* <NextLink href="/product/slug" passHref prefetch={false} legacyBehavior> */}
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false} legacyBehavior>
          <Link>
            <CardActionArea>
                {product.inStock === 0 && (
                    <Chip
                        color="info"
                        label="Sin Stock"
                        sx={{
                            position: "absolute",
                            zIndex: 99,
                            top: "10px",
                            left: "10px",
                        }}
                    />
                )}
              <CardMedia
                component="img"
                className={inImage}
                image={productImage}
                alt={product.title}
                onLoad={() => setIsImageLoaded(true)}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box
        sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }}
        className="fadeIn"
      >
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography
          fontSize={30}
          fontWeight={600}
        >{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};

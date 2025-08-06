import React from "react";
import { Star, Calendar } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

interface ReviewsTabProps {
  reviews?: Review[];
  averageRating?: number;
  totalReviews?: number;
}

const ReviewsTab = ({
  reviews,
  averageRating = 4.0,
  totalReviews = 2,
}: ReviewsTabProps) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="space-y-4 mb-2">
      <div className="text-center mt-6">
        <div className="text-3xl font-semibold text-[#4B4B4B]">
          {averageRating.toFixed(1)}/
          <span className="text-base font-normal">5</span>
        </div>
        <p className="text-[#4B4B4B] text-sm">
          Based on {totalReviews} reviews
        </p>
        <p className="text-[#4B4B4B] text-sm">
          Feedback from verified MealPrep.co customers
          <br />
          who've previously ordered this dish.
        </p>
      </div>

      <div className="space-y-6 text-[#4B4B4B]">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="space-y-1">
              <h4 className="font-semibold text-base">{review.name}</h4>

              <p className="leading-relaxed text-sm">{review.comment}</p>

              <div className="flex items-center gap-4">
                {renderStars(review.rating)}
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="w-5 h-5" />
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            No reviews available for this meal yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsTab;
